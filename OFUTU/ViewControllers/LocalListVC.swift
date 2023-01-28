//
//  LocalListVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import RxSwift
import RxCocoa


class LocalListVC: UIViewController {
    // UIButton
    @IBOutlet weak var searchButton: UIButton!
    @IBOutlet weak var backButton: UIButton!
    
    // UITableView
    @IBOutlet weak var localTableView: UITableView!
    
    // Constants
    let BUTTON_IMAGE: UIImage? = UIImage(systemName: "magnifyingglass", withConfiguration: UIImage.SymbolConfiguration(pointSize: 23))
    let TABLE_VIEW_ROW_NUMBER = 4
    let NUMBER_ARRAY = [0, 1, 2, 3]
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
        action()
    }
    
    private func initUI() {
        // UITableView
        configureTableView()
        
        // UIButton
        searchButton.setImage(BUTTON_IMAGE, for: .normal)
    }
    
    private func action() {
        backButton.rx.tap
            .subscribe(onNext: { _ in
                self.dismiss(animated: true)
            })
            .disposed(by: disposeBag)
    }

    private func configureTableView() {
        localTableView.dataSource = self
        localTableView.delegate = self
        localTableView.register(UINib(nibName: "LocalPlaceCell", bundle: nil), forCellReuseIdentifier: "LocalPlaceCell")
    }
}

extension LocalListVC: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return NUMBER_ARRAY.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "LocalPlaceCell", for: indexPath) as! LocalPlaceCell
        
        cell.setData(index: NUMBER_ARRAY[indexPath.row])
        cell.selectionStyle = .none
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        if indexPath.row == 0 {
            let detailLocalVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "DetailLocalVC") as! DetailLocalVC
            
            detailLocalVC.modalTransitionStyle = .crossDissolve
            detailLocalVC.modalPresentationStyle = .overFullScreen
            
            self.present(detailLocalVC, animated: true)
        }
    }
    
    
}
