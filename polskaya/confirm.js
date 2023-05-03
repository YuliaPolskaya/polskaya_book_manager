$.asyncModal=function createAsyncModal(options) {
    return new Promise((resolve, reject) => {
        const asyncModal = new Modal({
            modalTitle: options.modalTitle,
            modalText: options.modalText,
            onClose() {
                asyncModal.destroy()
            },
            modalFooter: [,
                {
                    text: "Зберегти",
                    type: "",
                    closable: true,
                    handler() {
                        asyncModal.close();

                        resolve();
                        console.log('Danger btn was clicked')
                        //asyncModal.destroy();
                    }
                },
                {
                    text: "Закрити",
                    type: "",
                    closable: true,
                    handler() {
                        asyncModal.close();
                        //asyncModal.destroy();
                        reject();
                        console.log('Danger btn was clicked')
                    }
                }
            ]

        });
        setTimeout(() => asyncModal.open(), 100);
    })
};