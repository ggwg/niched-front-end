# test linting (test syntax, format code with prettier)
yarn lint && echo "Linitng passed!" || ("Linting error, check syntax!" && exit 1)
# unit test
yarn test:unit && echo "unit test passed!" || ("error in unit test!" && exit 1)
