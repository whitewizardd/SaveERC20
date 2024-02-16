
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import {expect, assert} from "chai";


describe("Test saveERC20", function(){

    let face;
    async function deploySaveERC20(){
        const[owner, firstA, secondA] = await ethers.getSigners();

        const MyToken = await ethers.getContractFactory("MyToken");
        const myToken = await MyToken.deploy();


        const SaveERC20 = await ethers.getContractFactory("SaveERC20");
        const saveERC20 = await SaveERC20.deploy(myToken.target);


        return {saveERC20, owner, myToken, firstA, secondA};
    }

    describe("Confirm deploy", function(){
        it("", async function(){
            const{saveERC20} = await loadFixture(deploySaveERC20);
            assert.isNotNull(saveERC20);
        })
    });


    describe("", function(){
        it("", async function(){
            const {myToken} = await loadFixture(deploySaveERC20);
        })
    })


})