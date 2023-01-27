//
//  NetworkManager.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit
import Alamofire
import SwiftyJSON

class NetworkManager {
    static let shared = NetworkManager()
    
    private init() {}
    
    func creatUser(userObj: User) {
        let REQUEST_URL = ""
        let PARAMS: [String: Any] = [:]
        let HEADERS: HTTPHeaders = [:]
        AF.request(REQUEST_URL,
                   method: .put,
                   parameters: PARAMS,
                   encoding: URLEncoding.default,
                   headers: HEADERS)
        .validate(statusCode: 200..<300)
        .response { response in
            switch response.result {
            case .success(let data):
                let json = JSON(data!)
            case .failure(_):
                print(JSON(response.data))
                print(response.error)
            }
        }
    }
    
    func fetchUser(completionHandler: @escaping (_ userObj: User)-> ()) {
        let REQUEST_URL = ""
        let PARAMS: [String: Any] = [:]
        let HEADERS: HTTPHeaders = [:]
        AF.request(REQUEST_URL,
                   method: .get,
                   parameters: PARAMS,
                   encoding: URLEncoding.default,
                   headers: HEADERS)
        .validate(statusCode: 200..<300)
        .response { response in
            switch response.result {
            case .success(let data):
                let json = JSON(data!)
            case .failure(_):
                print(JSON(response.data))
                print(response.error)
            }
        }
    }
}
