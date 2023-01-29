//
//  FullWebViewVC.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/29.
//

import UIKit
import WebKit


class FullWebViewVC: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
   }
}

extension FullWebViewVC: WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        if let body = message.body as? String, body == "back" {
            self.dismiss(animated: true)
        }
    }
}
