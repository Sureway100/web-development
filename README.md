For screenshots => shift+win+s
------------------------------ 1 ------------------------------
-DO NOT HAVE MORE THAN ONE H1 IN A SINGLE PAGE
-DO NOT SKIP A LEVEL, TAKE IT SEQUENTIALLY... DONT JUMP FORM H1 TO H3

-WWW.LIPSUM.COM => USED TO GENERATE PARAGRAPHS OR JUST TYPING "FUNNY LOREM IPSUM"
-VOID ELEMENTS OR SELF CLOSING ELEMENTS LIKE HR, BR

-elements learnt => <p>, <h>,<br/>,<hr/>, <li>, <ol>, <ul>, <anchor tag>, <a herf>
<a draggable = true>, <img>

-Absolute vs relative file path
-for absolute, we are starting from the root folder and down to the location we want.
-for relative, we are not starting from the root, but a particular folder, so we specify our location in relative to our startting point.
it is most likely shorter than the absolute one. for relative we have some special characters that help, like
1=> ./ recommended,
2=> :/

<!-- #lets host our website for free on github -->

- create a new repo
- add repository name
- make it public
- add a Readme file
- create repo
- add files, upload your html, css and static files and drag in the contents individually.... make sure is
  index.html (lowercase i)
- got to settings, navigate to pages
- change branch from none to main and save... refresh your page until your see your url popup

------------------------------------------ 2 ---------------------------------------------------
CSS CSS CSS CSS CSS

-inline => <tag style="css"/>
-internal => <style>css</style>
-external => <link href="style.css"/>

=> CSS selector

- element selector
- attr selector => p[draggable] => this means select all para with attr draggable
- universal selector

----------------------mongodb
C:\Program Files\MongoDB\Server\7.0
create drive c/data/db
cd ~
touch .bash_profile
i .bash_profile

=======>
0

I faced alot of issues despite so many answers so this worked for me.

1.First install git and hyper terminal

2.Click the '~' sign to enter the home directory and then make a new file ".bash_profile"

Enter the command "vim .bash_profile"
Now enter 'i' key to enter the insert mode
Copy paste the exact command below:
alias mongod="C:/Program\ Files/MongoDB/Server/7.0/bin/mongod.exe"
alias mongo="C:/Program\ Files/MongoDB/Server/7.0/bin/mongos.exe"

(make sure that you use forward slash '/' for path and "\" backward slash to indicate space between program and files)

enter esc
write the command ':wq!' and click enter
restart hyper terminal and check the installation by running the command 'mongo --version'

======>

ODM => object document mapper => mongosedb...
