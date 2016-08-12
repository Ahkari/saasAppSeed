//
//  ExampleInterface.m
//  EhsySaasApp
//
//  Created by ehsy-it on 16/8/1.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import "ExampleInterface.h"
#import "CallAdressbookViewController.h"

@interface ExampleInterface()

@property (nonatomic, strong) NSDictionary *dic;

@end

@implementation ExampleInterface

- (instancetype) init{
  return self;
}

- (NSString *) contactName{
  if(!_contactName) {
    _contactName = @"";
  }
  return _contactName;
}

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(sendMessage: (NSString *)msg){
  NSLog(@"From React Native: %@", msg);
  NSData *data = [msg dataUsingEncoding:NSUTF8StringEncoding];
  NSError *error;
  NSDictionary *dic = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableLeaves error:&error];
  if( error != nil ){
    NSLog(@"解析错误: %@",error);
  }
  
  NSString *login = [dic objectForKey:@"msgType"];
  if ( [login isEqualToString:@"pickContact"] ){
    [self callAddress];
  }
}

- (void) callAddress {
  UIViewController *controller = (UIViewController *)[[[UIApplication sharedApplication] keyWindow] rootViewController];
  CallAdressbookViewController *addressbookVC = [[CallAdressbookViewController alloc] init];
  [controller presentViewController:addressbookVC animated:YES completion:nil];
  self.contactName = addressbookVC.contactName;
  self.contactNumber = addressbookVC.contactNumber;
  [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(calendarEventReminderReceived:) name:@"Num" object:nil];
}

- (dispatch_queue_t)methodQueue{
  return dispatch_get_main_queue();
}

- (void) calendarEventReminderReceived: (NSNotification *) notification {
  self.contactNumber = notification.object;
  self.contactName = notification.userInfo[@"name"];
  self.contactNumber = [self.contactNumber stringByReplacingOccurrencesOfString:@"-" withString:@""];
  self.contactNumber = [self.contactNumber stringByReplacingOccurrencesOfString:@"(" withString:@""];
  self.contactNumber = [self.contactNumber stringByReplacingOccurrencesOfString:@")" withString:@""];
  self.contactNumber = [self.contactNumber stringByReplacingOccurrencesOfString:@" " withString:@""];
  NSMutableDictionary *dic = [[NSMutableDictionary alloc] init];
  [dic setObject:@"pickContactResult" forKey:@"msgType"];
  if ( self.contactNumber == nil ){
    self.contactName = @"";
  }
  [dic setObject:self.contactNumber forKey:@"peerNumber"];
  if ( self.contactName == nil ) {
    self.contactName = @"";
  }
  [dic setObject:self.contactName forKey:@"displayName"];
  self.dic = [dic copy];
  NSError *error = [[NSError alloc] init];
  NSData *data = [NSJSONSerialization dataWithJSONObject:self.dic options:NSUTF8StringEncoding error:&error];
  NSString *str = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];
  //[self.bridge.eventDispatcher sendAppEventWithName:@"NativeModuleMsg" body:@{@"message":str}];
  
  
  [self sendEventWithName:@"NativeModuleMsg" body:@{@"message":str}];
  //[self startObserving];
}

- (NSArray<NSString *> *)supportedEvents{
  return @[@"NativeModuleMsg"];
}

@end
