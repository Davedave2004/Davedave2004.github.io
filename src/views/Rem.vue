<template>
    <v-container>
        <h1>Rem</h1>

        <v-row>
            <!-- Side Menu for searching/filtering -->
            <v-col>Search/Filter</v-col>
            <v-col>
                <!-- Rem List -->
                <v-row>
                    <v-col sm="6" md="4" v-for="item in rems" :key="item.id">
                        <RemCard :rem="item" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Rem",
    title: 'Rem Gallery',
    data: () => ({
        rems: [
            { id: 15, name: 'Relax Time: Ice Pop', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-15.jpg", owned: true },
            { id: 14, name: 'Winter Cloth', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-14.jpg", owned: true },
            { id: 13, name: 'Memory Snow Dog', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-13.jpg", owned: true },
            { id: 12, name: 'Yuki Onna', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-12.jpg", owned: true },
            { id: 11, name: 'Espresto est: Clear&Dressy', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-11.jpg", owned: true },
            { id: 10, name: 'Jumpsuit Swimsuit Renewal', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-10.jpg", owned: true },
            { id: 9, name: 'Birthday Lingerie', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-9.jpg", owned: true },
            { id: 8, name: 'Ichiban Kuji Natsu da! Umi da! Iseika Shoukan!', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-8.jpg", owned: true },
            { id: 7, name: 'Putito: Broom', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-7.jpg", owned: true },
            { id: 6, name: 'Figma', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-6.jpg", owned: true },
            { id: 5, name: 'Happy Easter', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-5.jpg", owned: true },
            { id: 4, name: 'Sporty Summer', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-4.jpg", owned: true },
            { id: 3, name: 'Winter Maid', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-3.jpg", owned: true },
            { id: 2, name: 'Loungewear', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-2.jpg", owned: true },
            { id: 1, name: 'Subaru\'s Training Wear', image: "https://raw.githubusercontent.com/davedave2004/Davedave2004.github.io/develop/src/assets/images/rem-1.jpg", owned: true },
        ]
    })

    // Add Date acquired?
}
</script>