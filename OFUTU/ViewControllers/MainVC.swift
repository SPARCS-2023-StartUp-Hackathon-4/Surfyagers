//
//  ViewController.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/27.
//

import UIKit
import PagingKit

class MainVC: UIViewController {
    // UIButton
    @IBOutlet weak var searchButton: UIButton!
    
    // CollectionView
    @IBOutlet weak var subCategoryCollectionView: UICollectionView!
    
    // PagingKit
    var menuViewController: PagingMenuViewController!
    var contentViewController: PagingContentViewController!
    let focusView = UnderlineFocusView()
    
    // Variables
    var dataSource = [(menuTitle: MainCategory.main.rawValue, vc: HomeManager.shared.getViewController(selectedMainCategory: .main)), (menuTitle: MainCategory.community.rawValue, vc: HomeManager.shared.getViewController(selectedMainCategory: .community))]
    var subCategoryList: [SubCategory] = [.home, .zeroWaste, .fairTrade, .ecoFriendly, .vegun, .donation, .etc]
    var selectedSubCategory: SubCategory = .home
    lazy var firstLoad: (() -> Void)? = { [weak self, menuViewController, contentViewController] in
        menuViewController?.reloadData()
        contentViewController?.reloadData { [weak self] in
            self?.adjustfocusViewWidth(index: 0, percent: 0)
        }
        self?.firstLoad = nil
    }
    
    // Constants
    let CELL_TITLE_FONT_SIZE: CGFloat = 16
    let BUTTON_IMAGE: UIImage? = UIImage(systemName: "magnifyingglass", withConfiguration: UIImage.SymbolConfiguration(pointSize: 23))
    
    override func viewDidLoad() {
        super.viewDidLoad()
        initUI()
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        firstLoad?()
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let vc = segue.destination as? PagingMenuViewController {
            menuViewController = vc
            menuViewController.dataSource = self
            menuViewController.delegate = self
        } else if let vc = segue.destination as? PagingContentViewController  {
            contentViewController = vc
            contentViewController?.dataSource = self
            contentViewController?.delegate = self
        }
    }
    
    private func initUI() {
        // PagingView
        configurePagingViews()
        
        // UIButton
        configureButton()
        
        // UICollectionView
        configureCollectionView()
    }
    
    private func configurePagingViews() {
        focusView.underlineColor = .black
        focusView.underlineHeight = 2
        menuViewController.cellAlignment = .center
        menuViewController.register(type: TitleLabelMenuViewCell.self, forCellWithReuseIdentifier: "identifier")
        menuViewController.registerFocusView(view: focusView)
        contentViewController.scrollView.bounces = true
    }
    
    private func configureButton() {
        searchButton.setImage(BUTTON_IMAGE, for: .normal)
    }
    
    private func configureCollectionView() {
        subCategoryCollectionView.dataSource = self
        subCategoryCollectionView.delegate = self
        subCategoryCollectionView.register(UINib(nibName: "SubCategoryCell", bundle: nil), forCellWithReuseIdentifier: "SubCategoryCell")
    }
}

extension MainVC: UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout {
    func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return subCategoryList.count
    }
    
    func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "SubCategoryCell", for: indexPath) as! SubCategoryCell
        
        cell.setData(title: subCategoryList[indexPath.row].rawValue, selectedTitle: selectedSubCategory)
        
        return cell
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
        return UIEdgeInsets(top: 0,
                            left: section == 0 ? 12 : 0,
                            bottom: 0,
                            right: section == 0 ? 12 : 0)
    }
    
    func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
        return CGSize(width: subCategoryList[indexPath.item].rawValue.size(withAttributes: [NSAttributedString.Key.font : FontManager.shared.getPretendardMedium(fontSize: 14)]).width + 20, height: 40)
    }
    
    func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
        selectedSubCategory = subCategoryList[indexPath.row]
        
        dataSource[0].1 = HomeManager.shared.getViewController(selectedMainCategory: .main)
        
        dataSource[1].1 = HomeManager.shared.getViewController(selectedMainCategory: .community)
        
        menuViewController.reloadData()
        contentViewController.reloadData()
        subCategoryCollectionView.reloadData()
    }
}


extension MainVC: PagingMenuViewControllerDataSource, PagingMenuViewControllerDelegate {
    func menuViewController(viewController: PagingMenuViewController, cellForItemAt index: Int) -> PagingMenuViewCell {
        let cell = viewController.dequeueReusableCell(withReuseIdentifier: "identifier", for: index)  as! TitleLabelMenuViewCell
        cell.focusColor = .black
        cell.titleLabel.text = dataSource[index].menuTitle
        cell.titleLabel.font = FontManager.shared.getPretendardMedium(fontSize: CELL_TITLE_FONT_SIZE)
        
        return cell
    }
    
    func menuViewController(viewController: PagingMenuViewController, widthForItemAt index: Int) -> CGFloat {
        return viewController.view.bounds.width / CGFloat(dataSource.count)
    }
        
    func numberOfItemsForMenuViewController(viewController: PagingMenuViewController) -> Int {
        return dataSource.count
    }
    
    func menuViewController(viewController: PagingMenuViewController, didSelect page: Int, previousPage: Int) {
        contentViewController.scroll(to: page, animated: true)
    }
    
    func menuViewController(viewController: PagingMenuViewController, willAnimateFocusViewTo index: Int, with coordinator: PagingMenuFocusViewAnimationCoordinator) {
        setFocusViewWidth(index: index)
        coordinator.animateFocusView { [weak self] coordinator in
            self?.focusView.layoutIfNeeded()
        } completion: { _ in }
    }
}

extension MainVC: PagingContentViewControllerDataSource, PagingContentViewControllerDelegate {
    func numberOfItemsForContentViewController(viewController: PagingContentViewController) -> Int {
        return dataSource.count
    }
    
    func contentViewController(viewController: PagingContentViewController, viewControllerAt index: Int) -> UIViewController {
        return dataSource[index].vc
    }
    
    func contentViewController(viewController: PagingContentViewController, didManualScrollOn index: Int, percent: CGFloat) {
        
        menuViewController.scroll(index: index, percent: percent, animated: false)
        adjustfocusViewWidth(index: index, percent: percent)
    }
    
    func adjustfocusViewWidth(index: Int, percent: CGFloat) {
        let adjucentIdx = percent < 0 ? index - 1 : index + 1
        guard let currentCell = menuViewController.cellForItem(at: index) as? TitleLabelMenuViewCell,
            let adjucentCell = menuViewController.cellForItem(at: adjucentIdx) as? TitleLabelMenuViewCell else {
            return
        }
        focusView.underlineWidth = adjucentCell.calcIntermediateLabelSize(with: currentCell, percent: percent)
    }
    
    func setFocusViewWidth(index: Int) {
        guard let cell = menuViewController.cellForItem(at: index) as? TitleLabelMenuViewCell else {
            return
        }
        focusView.underlineWidth = cell.labelWidth
    }
}
