//
//  DetailLocalCell.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/29.
//

import UIKit
import SnapKit

class DetailLocalCell: UITableViewCell {
    // UIButton
    @IBOutlet weak var seeButton: UIButton!
    
    // Constants
    let BUTTON_BORDER_WIDTH: CGFloat = 1
    let BUTTON_CORNER_RADIUS: CGFloat = 3
    let BUTTON_FONT_SIZE: CGFloat = 12
    
    override func awakeFromNib() {
        super.awakeFromNib()
        configureButton()
    }
    
    private func configureButton() {
        seeButton.layer.borderColor = ColorManager.shared.getGainsboro().cgColor
        seeButton.layer.borderWidth = BUTTON_BORDER_WIDTH
        seeButton.layer.cornerRadius = BUTTON_CORNER_RADIUS
        seeButton.titleLabel?.font = FontManager.shared.getPretendardMedium(fontSize: BUTTON_FONT_SIZE)
        seeButton.snp.makeConstraints { make in
            make.width.equalTo(65)
        }
    }

}
