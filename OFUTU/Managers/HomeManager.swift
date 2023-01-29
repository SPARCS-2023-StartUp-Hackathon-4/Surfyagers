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
    
    func getViewController(selectedMainCategory: MainCategory) -> WebVC {
        let webVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "WebVC") as! WebVC
        
        // MARK: - 실제 서버 Url로 변경 (테스트 Url)
        if selectedMainCategory == .main {
            webVC.requestUrl = "https://search.naver.com/"
        } else {
            let url = "https://search.daum.net/"
            webVC.requestUrl = url
        }
        
        return webVC
    }
}
