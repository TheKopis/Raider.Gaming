"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getRaiderIOProfile;
function getRaiderIOProfile(realm, name) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=${realm}&name=${name}&fields=mythic_plus_scores_by_season:current`, {
                method: 'GET'
            });
            const json = yield response.json();
            return json;
        }
        catch (e) {
            console.log(e);
            return undefined;
        }
    });
}
// `https://raider.io/api/v1/characters/profile?region=us&realm=illidan&name=metatanks`
