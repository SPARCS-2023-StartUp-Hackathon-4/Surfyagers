//
//  HomeManager.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit

class HomeManager {
    static let shared = HomeManager()
    
    private init() {}
    
    func getViewController(selectedMainCategory: MainCategory, selectedSubCategory: SubCategory) -> WebVC {
        let webVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "WebVC") as! WebVC
        
        var subCategory = ""
        switch selectedSubCategory {
        case .home:
            subCategory = "home"
        case .zeroWaste:
            subCategory = "zeroWaste"
        case .fairTrade:
            subCategory = "fairTrade"
        case .ecoFriendly:
            subCategory = "ecoFriendly"
        case .vegun:
            subCategory = "vegun"
        case .donation:
            subCategory = "donation"
        case .etc:
            subCategory = "etc"
        }
        
        // MARK: - 실제 서버 Url로 변경 (테스트 Url)
        if selectedMainCategory == .main {
            webVC.requestUrl = "https://search.naver.com/search.naver?query=\(subCategory)"
        } else {
            let url = "https://search.daum.net/search?w=tot&q=\(subCategory)"
            webVC.requestUrl = url
        }
        
        return webVC
    }
}
