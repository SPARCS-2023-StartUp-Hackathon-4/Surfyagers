//
//  SecondIntroVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import RxSwift
import RxCocoa
import RxGesture

class SecondIntroVC: UIViewController {
    // UIImageView
    @IBOutlet weak var zeroWasteImageView: UIImageView!
    @IBOutlet weak var vegunImageView: UIImageView!
    @IBOutlet weak var ecoFriendlyImageView: UIImageView!
    @IBOutlet weak var fairTradeImageView: UIImageView!
    @IBOutlet weak var donationImageView: UIImageView!
    
    // UILabel
    @IBOutlet weak var nameLabel: UILabel!
    
    // UIButton
    @IBOutlet weak var nextButton: UIButton!
    
    // ViewModel
    let viewModel = SecondIntroVM()
    
    // Variables
    var imageClickedList = Array<(UIImageView, Bool, UIImage, UIImage, SubCategory)>()
    
    // Constants
    let BUTTON_FONT_SIZE: CGFloat = 16.39
    let BUTTON_CORNER_RADIUS: CGFloat = 5
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
        action()
    }
    
    private func initUI() {
        // UIButton
        configureButton()
        
        // UILabel
        nameLabel.text = viewModel.name + "님은"
        
        // Tuple List
        imageClickedList = [
            (zeroWasteImageView, false, ImageManager.shared.getImage(.ZERO_WASTE_IMAGE), ImageManager.shared.getImage(.C_ZERO_WASTE_IMAGE), .zeroWaste),
            (vegunImageView, false, ImageManager.shared.getImage(.VEGUN_IMAGE), ImageManager.shared.getImage(.C_VEGUN_IMAGE), .vegun),
            (ecoFriendlyImageView, false, ImageManager.shared.getImage(.ECO_FRIENDLY_IMAGE), ImageManager.shared.getImage(.C_ECO_FRIENDLY_IMAGE), .ecoFriendly),
            (fairTradeImageView, false, ImageManager.shared.getImage(.FAIR_TRADE_IMAGE), ImageManager.shared.getImage(.C_FAIR_TRADE_IMAGE), .fairTrade),
            (donationImageView, false, ImageManager.shared.getImage(.DONATION_IMAGE), ImageManager.shared.getImage(.C_DONATION_IMAGE), .donation)]
    }

    private func action() {
        nextButton.rx.tap
            .subscribe(onNext: { _ in
                let thirdIntroVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "ThirdIntroVC") as! ThirdIntroVC
                
                thirdIntroVC.viewModel.name = self.viewModel.name
                thirdIntroVC.viewModel.tagList = self.getTagList()
                thirdIntroVC.modalTransitionStyle = .crossDissolve
                thirdIntroVC.modalPresentationStyle = .overFullScreen
                
                self.present(thirdIntroVC, animated: true)
            })
            .disposed(by: disposeBag)
        
        zeroWasteImageView.rx.tapGesture()
            .when(.recognized)
            .subscribe(onNext: { _ in
                self.tapImageView(index: 0)
                self.changeButtonStatus()
            })
            .disposed(by: disposeBag)
        
        vegunImageView.rx.tapGesture()
            .when(.recognized)
            .subscribe(onNext: { _ in
                self.tapImageView(index: 1)
                self.changeButtonStatus()
            })
            .disposed(by: disposeBag)
        
        ecoFriendlyImageView.rx.tapGesture()
            .when(.recognized)
            .subscribe(onNext: { _ in
                self.tapImageView(index: 2)
                self.changeButtonStatus()
            })
            .disposed(by: disposeBag)
        
        fairTradeImageView.rx.tapGesture()
            .when(.recognized)
            .subscribe(onNext: { _ in
                self.tapImageView(index: 3)
                self.changeButtonStatus()
            })
            .disposed(by: disposeBag)
        
        donationImageView.rx.tapGesture()
            .when(.recognized)
            .subscribe(onNext: { _ in
                self.tapImageView(index: 4)
                self.changeButtonStatus()
            })
            .disposed(by: disposeBag)
    }
    
    private func bind() {
        
    }
    
    private func configureButton() {
        nextButton.titleLabel?.font = FontManager.shared.getPretendardMedium(fontSize: BUTTON_FONT_SIZE)
        nextButton.layer.cornerRadius = BUTTON_CORNER_RADIUS
        nextButton.setTitleColor(.white, for: .normal)
        changeButtonStatus()
    }
    
    private func tapImageView(index: Int) {
        imageClickedList[index].1 = !imageClickedList[index].1
        imageClickedList[index].0.image = imageClickedList[index].1 ? imageClickedList[index].3 : imageClickedList[index].2
    }
    
    private func validateButton() -> Bool {
        for tuple in imageClickedList {
            if tuple.1 == true {
                return true
            }
        }
        return false
    }
    
    private func changeButtonStatus() {
        nextButton.isEnabled = validateButton()
        nextButton.backgroundColor = nextButton.isEnabled ? .black : ColorManager.shared.getLightSilver()
    }
    
    private func getTagList() -> [String] {
        var tagList: [String] = Array<String>()
        for tuple in imageClickedList {
            if tuple.1 == true {
                tagList.append(tuple.4.rawValue)
            }
        }
        return tagList
    }
}
