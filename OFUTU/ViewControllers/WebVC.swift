//
//  WebVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit

class WebVC: UIViewController {
    // UIView
    @IBOutlet var webView: UIView!
    
    // String
    var requestUrl: String!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        WebViewManager.shared.getWebView(view: webView, viewcontroller: self, urlString: requestUrl)
    }
}



