//
//  ThirdIntroVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import RxSwift
import RxKeyboard
import SnapKit

class ThirdIntroVC: UIViewController {
    // UITextField
    @IBOutlet weak var goalTextField: UITextField!
    
    // UIView
    @IBOutlet weak var lineView: UIView!
    
    // UILabel
    @IBOutlet weak var validateLabel: UILabel!
    @IBOutlet weak var nameLabel: UILabel!
    
    // UIButton
    @IBOutlet weak var startButton: UIButton!
    
    // UIStackView
    @IBOutlet weak var goalStackView: UIStackView!
    
    // NSLayoutConstraint
    @IBOutlet weak var stackViewConstraint: NSLayoutConstraint!

    // ViewModel
    let viewModel = ThirdIntroVM()
    
    // Constants
    let TEXT_FIELD_FONT_SIZE: CGFloat = 24
    let BUTTON_FONT_SIZE: CGFloat = 16.39
    let BUTTON_CORNER_RADIUS: CGFloat = 5
    let STACK_VIEW_TOP_CONSTRAINT: CGFloat = 49
    let ACTIVE_HINT: String = "OFUTU와 가치 소비하러 같이 떠나요 :)"
    let INACTIVE_HINT: String = "문장은 4~13글자 여야 합니다. :("
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
        action()
        bind()
    }
    
    private func initUI() {
        // UIButton
        configureButton()
        
        // UITextField
        configureTextField()
        
        // UILabel
        nameLabel.text = viewModel.name + "님은"
    }
    
    private func action() {
        startButton.rx.tap
            .subscribe(onNext: {
                // MARK: - 서버 통신 코드 추가
                let mainVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "MainTabBarController") as! MainTabBarController
                
                mainVC.modalTransitionStyle = .crossDissolve
                mainVC.modalPresentationStyle = .overFullScreen
                
                self.present(mainVC, animated: true)
            })
            .disposed(by: disposeBag)
        
        goalTextField.rx.controlEvent([.editingDidBegin])
            .asObservable()
            .subscribe(onNext: { _ in
                UIView.animate(withDuration: 0.2, delay: 0.1) {
                    self.lineView.backgroundColor = .black
                    self.stackViewConstraint.constant = self.STACK_VIEW_TOP_CONSTRAINT
                    self.view.layoutIfNeeded()
                }
            })
            .disposed(by: disposeBag)
        
        RxKeyboard.instance.visibleHeight
            .drive(onNext: { [unowned self] keyboardHeight in
                let height = keyboardHeight > 0 ? -keyboardHeight + view.safeAreaInsets.bottom - 10 : 0
                
                self.startButton.snp.updateConstraints {
                    $0.bottom.equalTo(view.safeAreaLayoutGuide).offset(height)
                }
                view.layoutIfNeeded()
            })
            .disposed(by: disposeBag)
    }
    
    private func bind() {
        // Input
        goalTextField.rx.text.orEmpty
            .bind(to: viewModel.input.goal)
            .disposed(by: disposeBag)
        
        // Output
        viewModel.output.finishButtonValidation
            .subscribe(onNext: { check in
                self.validateLabel.text = check ? self.ACTIVE_HINT : self.INACTIVE_HINT
                self.startButton.isEnabled = check
                self.startButton.backgroundColor = self.startButton.isEnabled ? .black : ColorManager.shared.getLightSilver()
            })
            .disposed(by: disposeBag)
    }
    
    private func configureButton() {
        startButton.titleLabel?.font = FontManager.shared.getPretendardMedium(fontSize: BUTTON_FONT_SIZE)
        startButton.layer.cornerRadius = BUTTON_CORNER_RADIUS
        startButton.setTitleColor(.white, for: .normal)
        startButton.isEnabled = viewModel.isEnabled
        startButton.backgroundColor = startButton.isEnabled ? .black : ColorManager.shared.getLightSilver()
    }
    
    private func configureTextField() {
        goalTextField.font = FontManager.shared.getPretendardMedium(fontSize: TEXT_FIELD_FONT_SIZE)
    }
    
    // 유저가 화면을 터치했을 때 호출되는 메서드
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        // 키보드를 내린다.
        self.view.endEditing(true)
    }
}
