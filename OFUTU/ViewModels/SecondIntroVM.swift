//
//  SecondIntroVM.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import Foundation
import RxSwift

class SecondIntroVM {
    // Input
    var input = Input()
    
    // Output
    var output = Output()
    
    // Variable
    var name: String!
    var isEnabled: Bool = false
    var editorMode: EditorMode = .new
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    struct Input {
        
    }
    
    struct Output {
        
    }
    
    init() {
        
    }
}
