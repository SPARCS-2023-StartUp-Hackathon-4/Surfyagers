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
    var dataSource = [(menuTitle: MainCategory.main.rawValue, vc: HomeManager.shared.getViewController(selectedMainCategory: .main, selectedSubCategory: .home)), (menuTitle: MainCategory.community.rawValue, vc: HomeManager.shared.getViewController(selectedMainCategory: .community, selectedSubCategory: .home))]
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
    
    private func initUI() {
        // PagingView
        configurePagingViews()
        
        // UIButton
        configureButton()
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
