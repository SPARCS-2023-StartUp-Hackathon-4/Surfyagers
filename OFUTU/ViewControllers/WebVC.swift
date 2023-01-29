//
//  WebVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import WebKit

class WebVC: UIViewController {
    // UIView
    @IBOutlet var webView: UIView!
    
    // String
    var requestUrl: String!
    
    var userContentController = WKUserContentController.init()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        WebViewManager.shared.getWebView(view: webView, viewcontroller: self, urlString: requestUrl)
    }
}

extension WebVC: WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if let body = message.body as? String {
            let webViewManager = WebViewManager.shared
            webViewManager.getFullWebView( viewcontroller: self, urlString: "http://loopy-lim.com:5173"+body)
        }
    
    }
}
