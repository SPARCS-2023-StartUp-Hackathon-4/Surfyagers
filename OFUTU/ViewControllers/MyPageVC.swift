//
//  MyPageVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit

class MyPageVC: UIViewController {
    // UILabel
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var beginDateLabel: UILabel!
    @IBOutlet weak var goalLabel: UILabel!
    @IBOutlet weak var tagLabel: UILabel!
    
    // UIView
    @IBOutlet weak var containerView: UIView!
    
    // UIButton
    @IBOutlet weak var searchButton: UIButton!
    
    // Constants
    let BUTTON_IMAGE: UIImage? = UIImage(systemName: "magnifyingglass", withConfiguration: UIImage.SymbolConfiguration(pointSize: 23))
    let VIEW_BORDER_WIDTH: CGFloat = 1.0
    let VIEW_CORNER_RADIUS: CGFloat = 3
    let LABEL_FONT_SIZE: CGFloat = 19.86
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
    }
    
    private func initUI() {
        // UIButton
        configureButton()
        
        // UIView
        configureView()
        
        // UILabel
        configureLabel()
    }
    
    private func configureButton() {
        searchButton.setImage(BUTTON_IMAGE, for: .normal)
    }
    
    private func configureView() {
        containerView.layer.borderWidth = VIEW_BORDER_WIDTH
        containerView.layer.borderColor = ColorManager.shared.getDimGray().cgColor
        containerView.layer.cornerRadius = VIEW_CORNER_RADIUS
    }
    
    private func configureLabel() {
        let userName: String = UserDefaultsManager.shared.getUserName()
        let goal: String = UserDefaultsManager.shared.getUserGoal()
        
        nameLabel.text = userName + " 님은"
        goalLabel.text = goal + "을"
        tagLabel.text = getUserTagString()
        
        let attributedStr = NSMutableAttributedString(string: nameLabel.text!)
        attributedStr.addAttribute(.font, value: FontManager.shared.getPretendardBold(fontSize: LABEL_FONT_SIZE),range: (nameLabel.text! as NSString).range(of: userName))
        nameLabel.attributedText = attributedStr
        
        let attributedStr1 = NSMutableAttributedString(string: goalLabel.text!)
        attributedStr1.addAttribute(.font, value: FontManager.shared.getPretendardBold(fontSize: LABEL_FONT_SIZE),range: (goalLabel.text! as NSString).range(of: goal))
        goalLabel.attributedText = attributedStr1
        
        let attributedStr2 = NSMutableAttributedString(string: beginDateLabel.text!)
        attributedStr2.addAttribute(.font, value: FontManager.shared.getPretendardBold(fontSize: LABEL_FONT_SIZE),range: (beginDateLabel.text! as NSString).range(of: "1일"))
        beginDateLabel.attributedText = attributedStr2
    }
    
    private func getUserTagString() -> String {
        var tagList: [String] = UserDefaultsManager.shared.getUserTagList()
        
        if tagList.count == 1 {
            return tagList[0]
        } else {
            return tagList[0] + "/" + tagList[1]
        }
    }
}
