//
//  ThirdIntroVM.swift
//  OFUTU
//
//  Created by myungsun on 2023/01/28.
//

import Foundation
import RxSwift

class ThirdIntroVM {
    // Input
    var input = Input()
    
    // Output
    var output = Output()
    
    // Variable
    var name: String!
    var isEnabled: Bool = false
    
    // RxSwift
    let disposeBag = DisposeBag()
    
    struct Input {
        var goal = BehaviorSubject<String>(value: "")
    }
    
    struct Output {
        var finishButtonValidation = PublishSubject<Bool>()
    }
    
    init() {
        input.goal.subscribe(onNext: { goal in
            self.output.finishButtonValidation.onNext(self.validateGoal(goal: goal))
        })
        .disposed(by: disposeBag)
    }
    
    private func validateGoal(goal: String) -> Bool {
        if goal.count >= 4 && goal.count <= 13 {
            return true
        }
        return false
    }
}
