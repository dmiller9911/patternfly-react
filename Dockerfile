FROM mhart/alpine-node:10
# We store all our files in /usr/src to perform the build
WORKDIR /usr/src

COPY . .

RUN yarn

# We run the build and expose as /public
RUN yarn build:docs && mv packages/react-docs/public /public