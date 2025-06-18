#!/usr/bin/env node
import { diff } from '../src/diffBuilder.js';
import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two JSON files and shows differences')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    try {
      console.log(diff(filepath1, filepath2));
    } catch (error) {
      console.error('Error:', error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
