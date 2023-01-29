//
//  LocalPlaceCell.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import SnapKit

class LocalPlaceCell: UITableViewCell {
    // UIImageView
    @IBOutlet weak var shopImageView: UIImageView!
    
    // UILabel
    @IBOutlet weak var shopNameLabel: UILabel!
    @IBOutlet weak var addressLabel: UILabel!
    @IBOutlet weak var shopCategoryLabel: UILabel!
    
    // UIButton
    @IBOutlet weak var firstCategoryButton: UIButton!
    @IBOutlet weak var secondCategoryButton: UIButton!
    
    // Constants
    let BUTTON_CORNER_RADIUS: CGFloat = 12
    let BUTTON_BORDER_WIDTH: CGFloat = 0.7
    let BUTTON_FONT_SIZE: CGFloat = 11
    
    override func awakeFromNib() {
        super.awakeFromNib()
        configureButton()
    }
    
    func setData(index: Int) {
        switch index {
        case 0:
            shopImageView.image = ImageManager.shared.getImage(.FIRST_LOCAL_IMAGE)
            shopNameLabel.text = "이뮤 베이크샵"
            addressLabel.text = "서울특별시 마포구"
            shopCategoryLabel.text = "디저트 / 베이커리"
            firstCategoryButton.setTitle("비건", for: .normal)
            secondCategoryButton.setTitle("공정 무역", for: .normal)
            firstCategoryButton.snp.makeConstraints { make in
                make.width.equalTo(38)
            }
            secondCategoryButton.snp.makeConstraints { make in
                make.width.equalTo(61)
            }
        case 1:
            shopImageView.image = ImageManager.shared.getImage(.SECOND_LOCAL_IMAGE)
            shopNameLabel.text = "덕분애"
            addressLabel.text = "서울특별시 서초구"
            shopCategoryLabel.text = "잡화"
            firstCategoryButton.isHidden = true
            secondCategoryButton.setTitle("제로웨이스트", for: .normal)
            secondCategoryButton.snp.makeConstraints { make in
                make.width.equalTo(78)
            }
        case 2:
            shopImageView.image = ImageManager.shared.getImage(.THIRD_LOCAL_IMAGE)
            shopNameLabel.text = "비거니 샐러드"
            addressLabel.text = "서울특별시 마포구"
            shopCategoryLabel.text = "식사"
            firstCategoryButton.setTitle("비건", for: .normal)
            secondCategoryButton.setTitle("공정 무역", for: .normal)
            firstCategoryButton.snp.makeConstraints { make in
                make.width.equalTo(38)
            }
            secondCategoryButton.snp.makeConstraints { make in
                make.width.equalTo(61)
            }
        case 3:
            shopImageView.image = ImageManager.shared.getImage(.FOURTH_LOCAL_IMAGE)
            shopNameLabel.text = "지구 제로웨이트샵"
            addressLabel.text = "서울특별시 강남구"
            shopCategoryLabel.text = "잡화"
            firstCategoryButton.isHidden = true
            secondCategoryButton.setTitle("제로웨이스트", for: .normal)
            secondCategoryButton.snp.makeConstraints { make in
                make.width.equalTo(78)
            }
        default:
            break
        }
    }
    
    private func configureButton() {
        firstCategoryButton.layer.borderColor = ColorManager.shared.getDavyGray().cgColor
        firstCategoryButton.layer.cornerRadius = BUTTON_CORNER_RADIUS
        firstCategoryButton.layer.borderWidth = BUTTON_BORDER_WIDTH
        firstCategoryButton.backgroundColor = ColorManager.shared.getWhite()
        firstCategoryButton.titleLabel?.font = FontManager.shared.getPretendardMedium(fontSize: BUTTON_FONT_SIZE)
        
        secondCategoryButton.layer.borderColor = ColorManager.shared.getDavyGray().cgColor
        secondCategoryButton.layer.cornerRadius = BUTTON_CORNER_RADIUS
        secondCategoryButton.layer.borderWidth = BUTTON_BORDER_WIDTH
        secondCategoryButton.backgroundColor = ColorManager.shared.getWhite()
        secondCategoryButton.titleLabel?.font = FontManager.shared.getPretendardMedium(fontSize: BUTTON_FONT_SIZE)
    }
}
