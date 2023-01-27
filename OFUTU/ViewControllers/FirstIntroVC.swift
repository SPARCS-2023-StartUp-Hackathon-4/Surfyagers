//
//  FirstIntroVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import RxSwift
import RxCocoa
import RxKeyboard
import SnapKit

class FirstIntroVC: UIViewController {
    // UIStackView
    @IBOutlet weak var titleStackView: UIStackView!
    @IBOutlet weak var nameStackView: UIStackView!
    
    // UITextField
    @IBOutlet weak var nameTextField: UITextField!
    
    // UIView
    @IBOutlet weak var lineView: UIView!
    
    // UILabel
    @IBOutlet weak var validateLabel: UILabel!
    
    // UIButton
    @IBOutlet weak var nextButton: UIButton!
    
    // NSLayoutConstraint
    @IBOutlet weak var stackViewConstraint: NSLayoutConstraint!
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    // Constants
    let TEXT_FIELD_FONT_SIZE: CGFloat = 24
    let BUTTON_FONT_SIZE: CGFloat = 16.39
    let BUTTON_CORNER_RADIUS: CGFloat = 5
    let STACK_VIEW_TOP_CONSTRAINT: CGFloat = 65
    let ACTIVE_HINT: String = "사용할 수 있는 이름입니다 :)"
    let INACTIVE_HINT: String = "이름은 2~10글자 여야 합니다. :("
    
    // ViewModel
    let viewModel = FirstIntroVM()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
    }
    
    private func initUI() {
        // UITextField
        configureTextField()
        
        // UIButton
        configureButton()
    }
    
    private func configureTextField() {
        nameTextField.font = FontManager.shared.getPretendardMedium(fontSize: TEXT_FIELD_FONT_SIZE)
    }
    
    private func configureButton() {
        nextButton.titleLabel?.font = FontManager.shared.getPretendardMedium(fontSize: BUTTON_FONT_SIZE)
        nextButton.layer.cornerRadius = BUTTON_CORNER_RADIUS
        nextButton.setTitleColor(.white, for: .normal)
        nextButton.isEnabled = viewModel.isEnabled
        nextButton.backgroundColor = nextButton.isEnabled ? .black : ColorManager.shared.getLightSilver()
    }
    
    // 유저가 화면을 터치했을 때 호출되는 메서드
    override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
        // 키보드를 내린다.
        self.view.endEditing(true)
    }
}
