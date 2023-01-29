//
//  WebViewManager.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import WebKit

class WebViewManager {
    static let shared = WebViewManager()

    private init() {}
    
    func getWebView(view: UIView, viewcontroller: UIViewController, urlString: String) {
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.allowsPictureInPictureMediaPlayback = true
        webConfiguration.preferences.javaScriptEnabled = true
        let url = URL(string: urlString)
        let request = URLRequest(url: url!)
        let contentController = WKUserContentController()
        webConfiguration.userContentController = contentController
        
        let webView = WKWebView(frame: CGRect(x: 0, y: 0, width: view.bounds.width, height: view.bounds.height), configuration: webConfiguration)
        view.addSubview(webView)
        webView.load(request)
    }
    
    func getFullWebView(view: UIView, viewcontroller: UIViewController, urlString: String) {
        let webConfiguration = WKWebViewConfiguration()
        webConfiguration.allowsInlineMediaPlayback = true
        webConfiguration.mediaTypesRequiringUserActionForPlayback = []
        webConfiguration.preferences.javaScriptEnabled = true
        let url = URL(string: urlString)
        let request = URLRequest(url: url!)
        let fullWebViewVC = UIStoryboard(name: "Main", bundle: nil).instantiateViewController(withIdentifier: "FullWebViewVC") as! FullWebViewVC
        let fullWebViewParrent = fullWebViewVC.view
        
        let contentController = WKUserContentController()
        contentController.add(fullWebViewVC as! WKScriptMessageHandler, name: "scriptHandler")
        webConfiguration.userContentController = contentController
        
        let webView = WKWebView(frame: CGRect(x: 0, y: 0, width: fullWebViewParrent!.bounds.width, height: fullWebViewParrent!.bounds.height), configuration: webConfiguration)
        fullWebViewParrent?.addSubview(webView)
        webView.load(request)
        
        fullWebViewVC.modalPresentationStyle = .overFullScreen
        viewcontroller.present(fullWebViewVC, animated: true)
    }
}
