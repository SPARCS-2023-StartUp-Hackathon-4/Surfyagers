//
//  SubCategoryCell.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit

class SubCategoryCell: UICollectionViewCell {
    // UILabel
    @IBOutlet weak var titleLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    
    func setData(title: String, selectedTitle: SubCategory) {
        titleLabel.text = title
        if titleLabel.text == selectedTitle.rawValue {
            titleLabel.textColor = .black
        } else {
            titleLabel.textColor = ColorManager.shared.getSonicSilver()
        }
    }

}
