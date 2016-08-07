'use strict';

let JsonMessage = function (topic, content) {
    this.topic = topic;
    this.content = content;

    this.getTopic = () => topic;
    this.getContent = () => content;

    this.toString = () => JSON.stringify({
        topic: topic,
        content: content
    });

};

module.exports = {
    createMessage: (topic, content) => {
        return new JsonMessage(topic, content);
    }
};
