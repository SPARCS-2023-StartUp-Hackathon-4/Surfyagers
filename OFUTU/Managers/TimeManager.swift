//
//  TimeManager.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import Foundation

class TimeManager {
    static let shared = TimeManager()
    
    private init() {}
    
    func getElapsedTime(beginDate: Date) -> Int{
        let beginDate = beginDate
        let calendar = Calendar.current
        let components = calendar.dateComponents([.year, .month, .day], from: beginDate)
        let myDateComponents = DateComponents(year: components.year, month: components.month, day: components.day)
        let startDate = Calendar.current.date(from: myDateComponents)!
        let offsetComps = Calendar.current.dateComponents([.year,.month,.day], from: startDate, to: Date())
        
        return offsetComps.day! + 1
    }
}
