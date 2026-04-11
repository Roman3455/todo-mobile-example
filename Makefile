.PHONY: create-project-default reset-project-default create-project-blank create-project-tabs create-project-bare-min \
		run-project run-project-reset-cache run-project-ios run-project-android \
		code-lint code-format code-format-check

### Create project template ###
create-project-default:
	npx create-expo-app@latest --template default .
reset-project-default:
	npm run reset-project
create-project-blank:
	npx create-expo-app@latest --template blank-typescript .
create-project-tabs:
	npx create-expo-app@latest --template tabs-typescript .
create-project-bare-min:
	npx create-expo-app@latest --template bare-minimum-typescript .

### Run project ###
run-project:
	npx expo start
run-project-reset-cache:
	npx expo start --clear
run-project-ios:
	npx expo run:ios
run-project-android:
	npx expo run:android

### Service commands ###
code-lint:
	npm run lint
code-format:
	npm run format
code-format-check:
	npm run format:check
