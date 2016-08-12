//
//  ExampleInterface.h
//  AwesomeProject
//
//  Created by ehsy-it on 16/8/1.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"
#import "RCTBridge.h"
#import "RCTEventEmitter.h"

@interface ExampleInterface : RCTEventEmitter
@property (nonatomic, strong) NSString *contactName;
@property (nonatomic, strong) NSString *contactNumber;

- (NSArray<NSString *> *)supportedEvents;

@end
