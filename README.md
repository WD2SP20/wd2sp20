# CSCI 32 - Fall 2018 #

### What is this repository for? ###

* Class Lecture Files
* Class Exercise Files
* Class Lab Files

### How do I use this repository? ###

+ The master branch has this README.
+ To list available braches to checkout run the following
    *  cd ~/workspace
    *  git branch -a
+ To checkout a particular branch run the following:
    *  git checkout -b BRANCHNAME class/BRANCHNAME (where BRANCHNAME is the name after the remotes/class/)
+ To get back to the master branch:
    *  cd ~/workspace
    *  git checkout master

### How to get new files into the repository if you already have created it ###

* Open up your terminal
+ Run the following commands in the terminal:
    * cd ~/workspace
    * git fetch class
    * git checkout master (or whatever branch you want to checkout)
- Your repository should now be up to date

### How to setup your repository to get new files from me (Do this Once!) ###
* Open up your terminal
+ Run the following commands in the terminal:
    * cd ~/workspace
    * git remote add class https://github.com/WD2FA18/wd2fa18.git