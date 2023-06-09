var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//@ts-ignore
const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('hot')
        .setDescription('Joga uma moeda, tirando cara ou coroa.'),
    execute(interaction) {
        return __awaiter(this, void 0, void 0, function* () {
            yield interaction.reply(`**${interaction.user.username}** jogou uma moeda.
**Resultado:** ${headsOrTails()}`);
        });
    }
};
function headsOrTails() {
    const headsOrTailsVariable = new Date().getMilliseconds() + Math.floor(Math.random() * Math.floor(Math.random() * 1000 + 1) + 1);
    if (headsOrTailsVariable % 2 === 0) {
        console.log("Heads!");
        return "Heads!";
    }
    else {
        console.log("Tails!");
        return "Tails!";
    }
}
