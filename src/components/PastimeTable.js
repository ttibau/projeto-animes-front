import React from 'react'
import { Table, Divider, Tag, Icon, Tooltip } from 'antd';

export default function PastimeTable() {
    const columns = [
      {
        title: 'Título',
        dataIndex: 'title',
        key: 'title',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Descrição',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Imagem',
        dataIndex: 'picture',
        key: 'picture',
        align: 'center', 
        render: (image) => (
          <a href="#">
            <div className="hover-img">
              <Icon type="eye" />
              <span>
                <img src={image} alt="image" height="100" /> 
              </span>
            </div>
          </a>
        )
      },
      {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = tag.length > 5 ? 'geekblue' : 'green';
              if (tag === 'loser') {
                color = 'volcano';
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
      },
      {
        title: 'Dublado/Legendado',
        dataIndex: 'isDubbed',
        key: 'isDubbed',
        align: 'center',
        render: (value) => (
          <span>
            {value === 0 &&
              <Tooltip title="Dublado">
                <Icon type="file-text" />
              </Tooltip>
            }

            {value === 1 &&
              <Tooltip title="Legendado">
                <Icon type="sound" />
              </Tooltip>
            }

            {value === 2 &&
              <Tooltip title="Ambos">
                <Icon type="fire" />
              </Tooltip>
            }
          </span>
        )
      },
      {
        title: 'Qtd. Episódios',
        dataIndex: 'episodesCount',
        key: 'episodesCount',
        align: 'center'
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a>Invite {record.name}</a>
            <Divider type="vertical" />
            <a>Delete</a>
          </span>
        ),
      },
    ];

    const data = [
        {
          key: '1',
          title: 'Kimetsu no Yaba',
          description: 'Lorem impsun dolor sit amet, alo globo até mais',
          picture: 'https://fakeimg.pl/250x100/',
          tags: ['nice', 'developer'],
          isDubbed: 0,
          episodesCount: 762,
        },
        {
            key: '2',
            title: 'Boku no Hero',
            description: 'Lorem impsun dolor sit amet, alo globo até mais',
            picture: 'https://fakeimg.pl/250x100/',
            tags: ['nic1e', 'deve1loper'],
            isDubbed: 2,
            episodesCount: 762,
        },
        {
            key: '3',
            title: 'Naruto',
            description: 'Lorem impsun dolor sit amet, alo globo até mais',
            picture: 'https://fakeimg.pl/250x100/',
            tags: ['nic33e', 'develop33er'],
            isDubbed: 2,
            episodesCount: 322,
        },
    ];

    return(
        <Table style={{ marginTop: 20 }} columns={columns} dataSource={data} />
    )
}