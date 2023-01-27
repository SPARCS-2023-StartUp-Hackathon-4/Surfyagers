//
//  ColorManager.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit

class ColorManager {
    static let shared = ColorManager()
    
    private init() {}
    
    func getWhite() -> UIColor {
        return UIColor(named: "White")!
    }
    
    func getLightSilver() -> UIColor {
        return UIColor(named: "LightSilver")!
    }
    
    func getSonicSilver() -> UIColor {
        return UIColor(named: "SonicSilver")!
    }
    
    func getPlatinum() -> UIColor {
        return UIColor(named: "Platinum")!
    }
    
    func getGainsboro() -> UIColor {
        return UIColor(named: "Gainsboro")!
    }
    
    func getNickel() -> UIColor {
        return UIColor(named: "Nickel")!
    }
    
    func getOldSilver() -> UIColor {
        return UIColor(named: "OldSilver")!
    }
}

