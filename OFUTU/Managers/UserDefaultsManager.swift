//
//  UserDefaultsManager.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import Foundation

class UserDefaultsManager {
    static let shared = UserDefaultsManager()
    
    private init() {}
    
    private let USER_NAME = "userName"
    private let TAG_List = "tagList"
    private let USER_GOAL = "userGoal"
    
    func getUserName() -> String {
        return UserDefaults.standard.string(forKey: USER_NAME)!
    }
    
    func setUserName(name: String) {
        UserDefaults.standard.set(name, forKey: USER_NAME)
    }
    
    func setUserTagList(tagList: [String]) {
        UserDefaults.standard.set(tagList, forKey: TAG_List)
    }
    
    func getUserTagList() -> [String] {
        return UserDefaults.standard.object(forKey: TAG_List) as! [String]
    }
    
    func getUserGoal() -> String {
        return UserDefaults.standard.string(forKey: USER_GOAL)!
    }
    
    func setUserGoal(goal: String) {
        UserDefaults.standard.set(goal, forKey: USER_GOAL)
    }
}
