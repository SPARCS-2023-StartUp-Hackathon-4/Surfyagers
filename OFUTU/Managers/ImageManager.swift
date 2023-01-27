//
//  ImageManager.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import UIKit

enum ImageName: String {
    case ZERO_WASTE_IMAGE = "ZeroWasteImage"
    case C_ZERO_WASTE_IMAGE = "C_ZeroWasteImage"
    case VEGUN_IMAGE = "VegunImage"
    case C_VEGUN_IMAGE = "C_VegunImage"
    case ECO_FRIENDLY_IMAGE = "EcoFriendlyImage"
    case C_ECO_FRIENDLY_IMAGE = "C_EcoFriendlyImage"
    case FAIR_TRADE_IMAGE = "FairTradeImage"
    case C_FAIR_TRADE_IMAGE = "C_FairTradeImage"
    case ETC_IMAGE = "ETCImage"
    case C_ETC_IMAGE = "C_ETCImage"
}

class ImageManager {
    static let shared = ImageManager()
    
    private init() {}
    
    func getImage(_ imageName: ImageName) -> UIImage {
        return UIImage(named: imageName.rawValue)!
    }
    
    func getSystemImage(_ imageName: ImageName) -> UIImage {
        return UIImage(systemName: imageName.rawValue)!
    }
}
