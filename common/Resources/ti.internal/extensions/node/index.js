// Load all the node compatible core modules
import './process';
import path from './path';
import os from './os';
import tty from './tty';
import util from './util';
import assert from './assert';
import events from './events';

// hook our implementations to get loaded by require
import { register } from '../binding';
register('path', path);
register('os', os);
register('tty', tty);
register('util', util);
register('assert', assert);
register('events', events);
