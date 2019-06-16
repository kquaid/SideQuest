import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repo-item',
  templateUrl: './repo-item.component.html',
  styleUrls: ['./repo-item.component.css']
})
export class RepoItemComponent implements OnInit {
  @Input('repo') repo:RepoItem;
  constructor() { }

  ngOnInit() {

  }
}

export interface RepoItem{
  name:string;
  url:string;
  icon:string;
  order: number,
  body: RepoBody,
  categories:string[];
}


export interface JSONRepo {
  timestamp:number;
  version:number;
  name:string;
  icon:string;
  address:string;
  description:string;
}

export interface JSONApp {
  antiFeatures:number[];
  categories:string[];
  suggestedVersionName:string;
  suggestedVersionCode:string;
  description:string;
  issueTracker:string;
  license:string;
  name:string;
  sourceCode:string;
  summary:string;
  webSite:string;
  added:number;
  icon:string;
  packageName:string;
  lastUpdated:number;
}
export interface JSONPackage {
  added: number;
  apkName: string;
  hash: string;
  hashType: string;
  minSdkVersion: string;
  nativecode: string[]
  packageName: string;
  sig: string;
  size: number;
  srcname: string;
  targetSdkVersion: string;
  versionCode: number;
  versionName: string;
  "uses-permission":any;
}
export interface RepoBody {
  repo:JSONRepo;
  requests:{install:[0],uninstall:[0]};
  apps:JSONApp[];
  packages:any;
}

