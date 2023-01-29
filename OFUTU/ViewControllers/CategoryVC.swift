//
//  CategoryVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit

class CategoryVC: UIViewController {
    // UIButton
    @IBOutlet weak var searchButton: UIButton!
    
    // Constants
    let BUTTON_IMAGE: UIImage? = UIImage(systemName: "magnifyingglass", withConfiguration: UIImage.SymbolConfiguration(pointSize: 23))

    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
    }
    
    private func initUI() {
        // UIButton
        searchButton.setImage(BUTTON_IMAGE, for: .normal)
    }
}
