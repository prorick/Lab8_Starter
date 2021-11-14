# Lab 8 - Starter


### Prothit Halder

#### Question 1: Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
I would fit my automated tests within a Github action that runs whenever code is pushed because we want to be constantly checking whether the code pushed is not leading to bugs. If we wait till the end of development, then there may be so many bugs that we get lost in debugging them. Also, it isn't good to debug your code only locally because not everyone has access to your local repo, so you want to run the automated tests within a Github action that runs whenever code is pushed. 

#### Question 2:
No.