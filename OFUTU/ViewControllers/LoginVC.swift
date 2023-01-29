//
//  LoginVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import RxSwift
import RxCocoa
import AVFoundation
import AuthenticationServices
import KakaoSDKAuth
import KakaoSDKUser

class LoginVC: UIViewController {
    // UIView
    @IBOutlet weak var videoLayerView: UIView!
    
    // UIButton
    @IBOutlet weak var appleLoginButton: UIButton!
    @IBOutlet weak var kakaoLoginButton: UIButton!
    
    // UIStackView
    @IBOutlet weak var buttonStackView: UIStackView!
    
    // UIImageView
    @IBOutlet weak var loginImageView: UIImageView!
    
    // Constants
    let BUTTON_RADIUS: CGFloat = 10
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
        action()
        playVideo()
    }
    
    private func initUI() {
        configureButton()
    }
    
    private func action() {
        appleLoginButton.rx.tap
            .subscribe(onNext: { _ in
                let appleIdProvider = ASAuthorizationAppleIDProvider()
                let request = appleIdProvider.createRequest()
                request.requestedScopes = [.fullName, .email]
                
                let authController = ASAuthorizationController(authorizationRequests: [request])
                authController.delegate = self
                authController.presentationContextProvider = self
                authController.performRequests()
            })
            .disposed(by: disposeBag)
        
        kakaoLoginButton.rx.tap
            .subscribe(onNext: { _ in
                if (UserApi.isKakaoTalkLoginAvailable()) {
                    // 카카오톡 로그인. api 호출 결과를 클로저로 전달.
                    UserApi.shared.loginWithKakaoAccount {(oauthToken, error) in
                        if let error = error {
                            // 예외 처리 (로그인 취소 등)
                            print(error)
                        }
                        else {
                            self.presentIntroVC()
                        }
                    }
                }
                
            })
            .disposed(by: disposeBag)
    }

    private func configureButton() {
        appleLoginButton.layer.cornerRadius = BUTTON_RADIUS
        kakaoLoginButton.layer.cornerRadius = BUTTON_RADIUS
    }
    
    private func playVideo() {
        guard let path = Bundle.main.path(forResource: "OFUTU1", ofType: "mp4") else { return }
        
        let player = AVPlayer(url: URL(fileURLWithPath: path))
        let playerLayer = AVPlayerLayer(player: player)
        playerLayer.frame = self.view.bounds
        playerLayer.videoGravity = .resizeAspectFill
        self.videoLayerView.layer.addSublayer(playerLayer)
        
        player.play()
        loopVideo(videoPlayer: player)
        videoLayerView.bringSubviewToFront(loginImageView)
        videoLayerView.bringSubviewToFront(appleLoginButton)
        videoLayerView.bringSubviewToFront(kakaoLoginButton)
        videoLayerView.bringSubviewToFront(buttonStackView)
    }
    
    func loopVideo(videoPlayer: AVPlayer) {
        NotificationCenter.default.addObserver(forName: NSNotification.Name.AVPlayerItemDidPlayToEndTime, object: nil, queue: nil) { notification in
            videoPlayer.seek(to: .zero)
            videoPlayer.play()
        }
    }
    
    private func presentIntroVC() {
        let firstIntroVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "FirstIntroVC") as! FirstIntroVC
        
        firstIntroVC.modalTransitionStyle = .crossDissolve
        firstIntroVC.modalPresentationStyle = .overFullScreen
        
        self.present(firstIntroVC, animated: true)
    }
}

extension LoginVC: ASAuthorizationControllerDelegate, ASAuthorizationControllerPresentationContextProviding {
    func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor {
        return self.view.window!
    }
    
    func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
        switch authorization.credential {
        case let appleIDCredential as ASAuthorizationAppleIDCredential:
            let userId = appleIDCredential.user
            let fullName = appleIDCredential.fullName
            let email = appleIDCredential.email
            
            print("User Id: \(userId)")
            if let fn = fullName {
                if let givenName = fn.givenName {
                    print("Given Name: \(givenName)")
                }
                print("FullName : \(fn)")
            }else {
                print("FullName is empty")
            }
            
            if let em = email {
                print("Email: \(em)")
            }else {
                print("Email is empty")
            }
            // MARK: - First Intro 화면으로 이동
            presentIntroVC()
        default:
            break
        }
    }
    
    func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
        // MARK: 애플 로그인 실패
        print("Apple LogIn failed")
    }
}
