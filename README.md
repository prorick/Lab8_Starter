# Lab 8 - Starter


### Prothit Halder

#### Question 1: Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
I would fit my automated tests within a Github action that runs whenever code is pushed because we want to be constantly checking whether the code pushed is not leading to bugs. If we wait till the end of development, then there may be so many bugs that we get lost in debugging them. Also, it isn't good to debug your code only locally because not everyone has access to your local repo, so you want to run the automated tests within a Github action that runs whenever code is pushed. 

#### Question 2:
No.

#### Question 3:
No because messaging requires testing on the application level. This is because the user is sending and recieving messages from another user, so that cannot be accomplished through unit testing. 

#### Question 4:
Yes because we can test the max length feature by passing in the texts that both exceed and are within the max length. This does not require testing on an application level, as we are looking at a very specific part of the messaging application. 