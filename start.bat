echo 'startblog...'
:: echo jekyll home : %JEKYLL_HOME%
:: echo path : %PATH%
@echo on
jekyll serve --watch --drafts
pause


