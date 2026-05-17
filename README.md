# Starting a new Craft CMS Project at Fredmansky

> ⚠️ **Requirements:** Docker, ddev, Node 20 & Git

## 😼 Create Git Repo

Go to [Github](https://github.com/) and create a new **private** repo using the _FREDMANSKY_project-template_ template.
Go to settings and adjust the following settings:

- Uncheck _Allow merge commits_
- Uncheck _Allow squash merging_
- Check _Automatically delete head branches_

Then clone your new repo locally.

## ✏️ Set Project Name

Set project name in [config.yaml](./.ddev/config.yaml).

## ✏️ Update README.md

Update project SITE_NAME and ddev urls in [env example](./.env.example).

## 😼 Commit your changes

Commit & push your project name changes.

## 🚧 Setup Script

Run the following shell script to install dependencies & setup Craft CMS:

```
./craft-scripts/setup.sh
```

## 🚀 Project-specific Configuration

Now it's time to start individualizing the project. If you are lost, check out our [Craft Guidelines](https://fredmansky.atlassian.net/wiki/external/ZjQ5Y2I2M2M5Mjg4NDYxZmEzOGYyZWQ2YjM4YTNhZjA). 
Have Fun! 🎉

## ☝️ One Last Thing!

Delete everything above this line for your project's README and update Project Name 😉

---

# Cool Fredmansky Project 🚀🔥✨🎉

## 💪 Setup:

> ⚠️ **Requirements:** Docker, ddev, Node 20 & Git

### Clone Git Repo

```
git clone git@github.com:fredmansky/...
```

### Run the following shell script to install dependencies & setup Craft CMS

```
./craft-scripts/setup.sh
```

### Use Craft scripts to pull DB and assets

- Copy `craft-scripts/.env.sh.example` to `craft-scripts/.env.sh` and fill out all variables
- Make sure you are authenticated to access the server using your SSH key (no password)
- With ddev started, copy your local ssh key to ddev  
  `ddev auth ssh`

To pull db & assets

```
ddev exec ./craft-scripts/pull_db.sh
ddev exec ./craft-scripts/pull_assets.sh
```

### Further Reading:

[Craft Guidelines](https://fredmansky.atlassian.net/wiki/external/ZjQ5Y2I2M2M5Mjg4NDYxZmEzOGYyZWQ2YjM4YTNhZjA)

## Custom Functionality:

...
