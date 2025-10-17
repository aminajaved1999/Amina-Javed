import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Menu } from './components/menu/menu';
import { Portfolio1 } from './components/portfolios/portfolio1/portfolio1';
import {Portfolio2}  from './components/portfolios/portfolio2/portfolio2';
import { Portfolio3 } from './components/portfolios/portfolio3/portfolio3';
import { Portfolio4 } from './components/portfolios/portfolio4/portfolio4';

export const routes: Routes =
[
    { path: '', component: Menu },
  { path: 'portfolio1', component: Portfolio1 },
  { path: 'portfolio2', component: Portfolio2 },
  { path: 'portfolio3', component: Portfolio3},
  { path: 'portfolio4', component: Portfolio4},
];
