//
//  DetailLocalVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import RxSwift
import RxCocoa

class DetailLocalVC: UIViewController {
    // UIButton
    @IBOutlet weak var backButton: UIButton!
    @IBOutlet weak var seeButton: UIButton!
    
    
    // UITableView
    @IBOutlet weak var detailTableView: UITableView!
    
    // Constant
    let BUTTON_CORNER_RADIUS: CGFloat = 3
    let BUTTON_FONT_SIZE: CGFloat = 15.56
    
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
        
        // UITableView
        configureTableView()
    }
    
    private func action() {
        backButton.rx.tap
            .subscribe(onNext: { _ in
                self.dismiss(animated: true)
            })
            .disposed(by: disposeBag)
    }
    
    private func configureTableView() {
        detailTableView.dataSource = self
        detailTableView.delegate = self
        detailTableView.register(UINib(nibName: "DetailLocalCell", bundle: nil), forCellReuseIdentifier: "DetailLocalCell")
    }
    
    private func configureButton() {
        seeButton.layer.cornerRadius = BUTTON_CORNER_RADIUS
        seeButton.backgroundColor = .black
        seeButton.setTitleColor(.white, for: .normal)
        seeButton.titleLabel?.font = FontManager.shared.getPretendardSemiBold(fontSize: BUTTON_FONT_SIZE)
    }
}

extension DetailLocalVC: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 1
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "DetailLocalCell", for: indexPath) as! DetailLocalCell
        
        return cell
    }
}
