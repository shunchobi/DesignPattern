<template></template>

<script setup lang="ts">

type user = { id: number, name: string, age: number };

// database
const data: user[] = [
    {
        id: 0,
        name: 'shun',
        age: 29,
    },
    {
        id: 1,
        name: 'sakura',
        age: 24,
    }
]
// API interface
const getDataid = (id: number): user => {
    return data[id];
}

interface DatabaseReource {
    getUserInfoIDis(id: number): user;
}

class UserDataProxy implements DatabaseReource {
    private haveGotUserData: user[] = [];
    getUserInfoIDis(id: number): user {
        if (this.haveGotUserData.find(user => user.id === id)) {
            return this.haveGotUserData[id];
        }
        // API GET
        const targetUserData = getDataid(id);
        this.haveGotUserData.push(targetUserData);
        return targetUserData;
    }
}

class UserData implements DatabaseReource {
    private userDataHolder: DatabaseReource;
    constructor() {
        this.userDataHolder = new UserDataProxy()
    }
    getUserInfoIDis(id: number): user {
        return this.userDataHolder.getUserInfoIDis(id);
    }
}

const usersData = new UserData();
const shun = usersData.getUserInfoIDis(1);

console.log(shun);

</script>
