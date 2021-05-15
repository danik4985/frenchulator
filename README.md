<p align="center">
<img src="https://cdn.discordapp.com/attachments/590022219305058305/842865690146635786/Snimek_z_2021-05-14_22-47-09.png">
</p>

# FrenchUlator
The calculator that knows french!

### Why?
Because why not.

![how did this happen](https://cdn.discordapp.com/attachments/733703994018496564/843066260408500254/Snimek_z_2021-05-15_12-03-49.png)

### How?
This calculator relies on several modules to translate numbers from french to english and turn words into numbers. It also uses math.js to evaluate the result. It might take a few seconds to calculate your equasion.

## Instalation

### System requirements
```
node >= 14.15.0
npm  >= 7.10.0
```

### Basic install

```bash
git clone https://github.com/danik4985/frenchulator.git
cd frenchulator
npm install
```

### Instalation as a terminal command

#### Linux
*Assuming you are in the folder with the source code*
```bash
ln -s "$PWD/cli/start.js" ~/.local/bin/frenchulator
chmod a+rx ~/.local/bin/frenchulator

# Then run with
frenchulator
```

#### MacOS
*Assuming you are in the folder with the source code*
*Not tested*
```bash
echo "alias frenchulator='$(realpath "cli/start.js")'" >> ~/.bash_profile
reset # Update your terminal session

# Then run with
frenchulator
```

#### Windows
*I don't know*

## Usage

### Running

#### If you installed it as a terminal command
```bash
frenchulator
```

#### If you have not
*Assuming you are in the folder with the source code*

Linux & Mac
```
./cli/start.js
```

Sh*tdows
```
node out/main.js
```

### Using
You will be asked to enter your equation. You have to enter it full in french, Fully means even operators to be words!
I dont know frech, so the operators were just translated using google translate:
```
plus    |  +
moins   |  -
fois    |  *
divisé  |  /
```
If you speak french and this is wrong please dm me on discord: `danik#4985`. Keep in mind this calculator recognises french french (not swiss french) (Swiss french has separate words for 70, 80, 90).

An example equation is
> *(quatre-vingt-trois moins [quinze divisé cinq]) fois treize*

Frenchulator can handle `()`, `[]` and `{}` brackets.

## Issues & Contributing
If you find any isuse, please report in the *issues* tab.
PRs welcome, but please keep the code the same style as I have it.

## Contact
If you want to contact me, you can do so on discord: `danik#4985`
