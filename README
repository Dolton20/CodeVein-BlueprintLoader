# IMPORTANT
NodeJS is required for non exe version

## Installation
BPLoader folder must be placed in the ~mods folder if any files or folders are moved or renamed the mod will break.

After adding a mod that uses the BPLoader run ConfigCreator.

## Notes
If you want to play the game on a different windows user you will need to run the script again while logged into the other user.

When deleting a mod also delete the config file in the `/~mods/BPLoader/Configs` folder and run the script again or the game will be stuck in a loading loop.

## Making Mods For BPLoader
1. Using the [CodeVein Modkit](https://github.com/Dolton20/CodeVein-Modkit) go into the UE4Project and create a level in a folder called BPLoader. (Putting the level in the BPLoader folder is optional)
2. You can put blueprint actors etc into the level and they will be loaded when the game starts.
3. To make levels in your mod load, create the pak file and make a json file with an array of level paths into the `/~mods/BPLoader/Configs` folder (the name of the json file does not matter but, making it the same name as the mod is recommended)

```json
[
  "/Game/BPLoader/YourLevel",
  "/Game/ExampleMod/YourLevel"
]
```

4. Then run the CreateConfig (Once you have run the CreateConfig you only have to run it again if you change the json file)