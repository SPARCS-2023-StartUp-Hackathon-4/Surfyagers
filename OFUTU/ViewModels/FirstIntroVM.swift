//
//  FirstIntroVM.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import Foundation
import RxSwift

class FirstIntroVM {
    // Input
    var input = Input()
    
    // Output
    var output = Output()
    
    // Variable
    var isEnabled: Bool = false
    var editorMode: EditorMode = .new
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    struct Input {
        var nickname = BehaviorSubject<String>(value: "")
    }
    
    struct Output {
        var nextButtonValidation = PublishSubject<Bool>()
    }
    
    init() {
        input.nickname.subscribe(onNext: { name in
            self.output.nextButtonValidation.onNext(self.validateName(name: name))
        })
        .disposed(by: disposeBag)
        
    }
    
    private func validateName(name: String) -> Bool {
        if name.count >= 2 && name.count <= 10 {
            return true
        }
        return false
    }
}
