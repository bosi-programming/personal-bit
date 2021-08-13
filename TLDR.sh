#!/bin/sh

echo '
█ ▀█▀ ▀ █▀   ▀█▀ █ █▀▄▀█ █▀▀   ▀█▀ █▀█   █▀▀ █▀█ █▀▄ █▀▀   ▄▀█ █▄░█ █▀▄   █▀▀ █░█ █▀▀ █░█░█
█ ░█░ ░ ▄█   ░█░ █ █░▀░█ ██▄   ░█░ █▄█   █▄▄ █▄█ █▄▀ ██▄   █▀█ █░▀█ █▄▀   █▄▄ █▀█ ██▄ ▀▄▀▄▀

█▄▄ █░█ █▄▄ █▄▄ █░░ █▀▀ █▀▀ █░█ █▀▄▀█ ░   ▄▀█ █▄░█ █▀▄   █ ▀ █▀▄▀█   ▄▀█ █░░ █░░   █▀█ █░█ ▀█▀   █▀█ █▀▀
█▄█ █▄█ █▄█ █▄█ █▄▄ ██▄ █▄█ █▄█ █░▀░█ █   █▀█ █░▀█ █▄▀   █ ░ █░▀░█   █▀█ █▄▄ █▄▄   █▄█ █▄█ ░█░   █▄█ █▀░

█▀▀ █░█ █▀▄▀█ ░
█▄█ █▄█ █░▀░█ ▄'

hasBvm=$(command -v bvm);
hasYarn=$(command -v yarn);

if [ ! $hasYarn ]; then
  npm install -g yarn
  echo 'Please restart your terminal so it can recognize yarn on your bin folder'
  exit 1
fi

if [ ! $noBvm ]; then
  bvm install
  echo 'Please restart your terminal so it can recognize bvm on your bin folder'
  exit 1
fi

bit install
yarn prepare
bit compile
bit start
