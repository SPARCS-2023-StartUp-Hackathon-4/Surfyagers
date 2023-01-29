//
//  LocalVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import RxSwift
import RxCocoa
import RxGesture

class LocalVC: UIViewController {
    // UIButton
    @IBOutlet weak var searchButton: UIButton!
    
    // UIStackView
    @IBOutlet weak var seoulStackView: UIStackView!
    
    // Constants
    let BUTTON_IMAGE: UIImage? = UIImage(systemName: "magnifyingglass", withConfiguration: UIImage.SymbolConfiguration(pointSize: 23))
    
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
    }
    
    private func action() {
        seoulStackView.rx.tapGesture()
            .when(.recognized)
            .subscribe(onNext: { _ in
                let localListVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "LocalListVC") as! LocalListVC
                
                localListVC.modalPresentationStyle = .overFullScreen
                localListVC.modalTransitionStyle = .crossDissolve
                
                self.present(localListVC, animated: true)
            })
            .disposed(by: disposeBag)
    }
    
    private func configureButton() {
        searchButton.setImage(BUTTON_IMAGE, for: .normal)
    }
}
